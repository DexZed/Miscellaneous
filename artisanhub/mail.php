<?php

use Mailtrap\Config;
use Mailtrap\Helper\ResponseHelper;
use Mailtrap\MailtrapClient;
use Symfony\Component\Mime\Address;
use Symfony\Component\Mime\Email;
use Mailtrap\EmailHeader\Template\TemplateUuidHeader;
use Mailtrap\EmailHeader\Template\TemplateVariableHeader;

require __DIR__ . '/vendor/autoload.php';

function sendMailtrapEmail($fromAddress, $fromName, $toAddress, $templateUuid, $templateVariables): array
{
    $apiKey = '1eb3e4670203206a345f196baf623a9f';
    $mailtrap = new MailtrapClient(new Config($apiKey));

    $email = (new Email())
        ->from(new Address($fromAddress, $fromName))
        ->to(new Address($toAddress))
    ;

    $headers = $email->getHeaders();
    $headers->add(new TemplateUuidHeader($templateUuid));

    foreach ($templateVariables as $name => $value) {
        $headers->add(new TemplateVariableHeader($name, $value));
    }

    $response = $mailtrap->sending()->emails()->send($email);

    return ResponseHelper::toArray($response);
}
function mailRedirect($fromAddress, $fromName, $toAddress, $templateUuid, $templateVariables): void
{
    $response = sendMailtrapEmail($fromAddress, $fromName, $toAddress, $templateUuid, $templateVariables);

    if (isset($response['status']) && $response['status'] === 'success') {
        header("Location: registration_confirmation.php");
        exit();
    } else {

        echo "<script type='text/javascript'>alert('Failed to send email. Please try again.');</script>";

    }
}
// Usage example:
//$fromAddress = 'mailtrap@demomailtrap.com';
//$fromName = 'Mailtrap Test';
//$toAddress = 'pykedread@gmail.com';
//$templateUuid = 'e7ac2adc-3e72-4a40-b9b8-3cf1dd48a5b5';
//$templateVariables = [
//    'user_email' => 'Test_User_email',
//    'pass_reset_link' => 'Test_Pass_reset_link'
//];
//
//$response = sendMailtrapEmail($fromAddress, $fromName, $toAddress, $templateUuid, $templateVariables);
//var_dump($response);

