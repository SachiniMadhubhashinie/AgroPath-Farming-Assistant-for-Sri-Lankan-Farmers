<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit;
}

$input = json_decode(file_get_contents('php://input'), true);

if (!$input) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid JSON']);
    exit;
}

$name = trim($input['name'] ?? '');
$email = trim($input['email'] ?? '');
$password = $input['password'] ?? '';
$confirmPassword = $input['confirmPassword'] ?? '';

// Validation
$errors = [];

if (empty($name)) {
    $errors['name'] = 'Name is required';
}

if (empty($email)) {
    $errors['email'] = 'Email is required';
} elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $errors['email'] = 'Invalid email format';
}

if (empty($password)) {
    $errors['password'] = 'Password is required';
} elseif (strlen($password) < 6) {
    $errors['password'] = 'Password must be at least 6 characters';
}

if ($password !== $confirmPassword) {
    $errors['confirmPassword'] = 'Passwords do not match';
}

if (!empty($errors)) {
    http_response_code(400);
    echo json_encode(['errors' => $errors]);
    exit;
}

// Check if users file exists, create if not
$usersFile = 'users.php';
if (!file_exists($usersFile)) {
    file_put_contents($usersFile, "<?php\n// AgroPath Users Data\n\$users = [];\n?>");
}

// Load existing users
include $usersFile;

// Check if email already exists
foreach ($users as $user) {
    if ($user['email'] === $email) {
        http_response_code(400);
        echo json_encode(['errors' => ['email' => 'Email already exists']]);
        exit;
    }
}

// Add new user
$newUser = [
    'id' => uniqid(),
    'name' => $name,
    'email' => $email,
    'password' => password_hash($password, PASSWORD_DEFAULT),
    'created_at' => date('Y-m-d H:i:s')
];

$users[] = $newUser;

// Save users back to file
$userData = "<?php\n// AgroPath Users Data\n\$users = " . var_export($users, true) . ";\n?>";
file_put_contents($usersFile, $userData);

echo json_encode([
    'success' => true,
    'message' => 'Account created successfully',
    'user' => [
        'id' => $newUser['id'],
        'name' => $newUser['name'],
        'email' => $newUser['email']
    ]
]);
?>
