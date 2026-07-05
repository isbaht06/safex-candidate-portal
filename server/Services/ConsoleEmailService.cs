namespace SafeXCandidatePortal.Api.Services;

public class ConsoleEmailService : IEmailService
{
    private readonly ILogger<ConsoleEmailService> _logger;

    public ConsoleEmailService(ILogger<ConsoleEmailService> logger)
    {
        _logger = logger;
    }

    public Task<bool> SendEmailAsync(string toAddress, string toName, string subject, string body)
    {
        _logger.LogInformation(
            "\n---- [DEV MODE: no SMTP configured — email logged, not sent] ----\n" +
            "To: {ToName} <{ToAddress}>\nSubject: {Subject}\n\n{Body}\n" +
            "------------------------------------------------------------\n",
            toName, toAddress, subject, body);
        return Task.FromResult(true);
    }
}