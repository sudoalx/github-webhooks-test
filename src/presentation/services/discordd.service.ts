import { environment } from "../../config";

export class DiscordService {
  private readonly discordWebhookUrl: string = environment.DISCORD_WEBHOOK_URL;

  async notify(message: string) {
    const body = {
      content: message,
      embeds: [
        {
          image: {
            url: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNHB2MXFycTAzODdzbmFmeTJ3M3BkOHF2NHUybjd1N3g2OWMxbmQwbCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/y9euf7PEoS7XeZhwC4/giphy.gif",
          },
        },
      ],
    };

    const res = await fetch(this.discordWebhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (!res.ok) {
      console.error(`Error: ${res.status} - ${res.statusText}`);
      return false;
    }
    return true;
  }
}
