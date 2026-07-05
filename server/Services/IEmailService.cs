namespace SafeXCandidatePortal.Api.Services;

public interface IEmailService
{
    Task<bool> SendEmailAsync(string toAddress, string toName, string subject, string body);
}