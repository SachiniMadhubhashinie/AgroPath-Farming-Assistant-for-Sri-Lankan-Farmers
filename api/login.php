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

$email = trim($input['email'] ?? '');
$password = $input['password'] ?? '';

// Validation
if (empty($email) || empty($password)) {
    http_response_code(400);
    echo json_encode(['error' => 'Email and password are required']);
    exit;
}

// Check if users file exists
$usersFile = 'users.php';
if (!file_exists($usersFile)) {
    http_response_code(400);
    echo json_encode(['error' => 'No users found']);
    exit;
}

// Load users
include $usersFile;

// Find user by email
$foundUser = null;
foreach ($users as $user) {
    if ($user['email'] === $email) {
        $foundUser = $user;
        break;
    }
}

if (!$foundUser) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid email or password']);
    exit;
}

// Verify password
if (!password_verify($password, $foundUser['password'])) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid email or password']);
    exit;
}

// Login successful
echo json_encode([
    'success' => true,
    'message' => 'Login successful',
    'user' => [
        'id' => $foundUser['id'],
        'name' => $foundUser['name'],
        'email' => $foundUser['email']
    ]
]);
?>
