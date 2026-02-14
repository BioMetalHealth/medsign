# BermudaSign

Bermuda Franchise Group's E-Signature Platform.

An open-source document signing solution for secure, self-hosted electronic signatures.

## Features

- PDF document form creation and management
- Multi-step signature workflows
- API for programmatic document signing
- Email and SMS notifications
- Embedding support (React, Vue, Angular)
- Webhooks for integration
- Role-based access control
- Custom branding and templates

## Self-Hosted Deployment

### Docker (Recommended)

```bash
docker run -d --name bermudasign \
  -p 3000:3000 \
  -v bermudasign_data:/data \
  bermudasign/bermudasign:latest
```

### Docker Compose

```bash
docker compose up -d
```

## License

See [LICENSE](LICENSE) file.
