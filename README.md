## Table of Contents

- [Architecture Overview](#architecture-overview)
- [Project Structure](#project-structure)
- [Cost Estimates](#cost-estimates)
- [Getting Started](#getting-started)

## Architecture Overview

This project demonstrates a complete cloud-native microservices based application where we will have Frontend layer, Backend layer, Database layer, Access Layer and Integration layer.

Below is the architecture for this application:
<img width="800" height="450" alt="image" src="https://github.com/user-attachments/assets/f4059007-aea1-4a75-9a2f-9178a86cd373" />

### AWS Services
- **Frontend**: S3 + CloudFront + Route53
- **API Layer**: API Gateway (HTTP API) + VPC Link + ALB
- **Compute**: ECS/Fargate
- **Authentication**: Cognito User Pools
- **Databases**: DynamoDB and RDS PostgreSQL
- **Messaging**: SNS + SQS (+SES)
- **Networking**: VPC, Subnets, Security Groups, NAT Gateway
- **Logs and Management**: CloudWatch, Systems Manager
- **Security**: IAM

## Project Structure

```
ecommerce-web-app/
├── services/                    # Backend microservices
│   ├── product-service/         # Python FastAPI
│   ├── cart-service/            # Python FastAPI
│   ├── user-service/            # Python FastAPI
│   └── order-service/           # Python FastAPI
├── frontend/
│   └── react-app/               # React application
├── data/                        # Product data + S3 upload scripts
├── deployment/                  # AWS deployment guides
│   ├── README.md                # Deployment overview
│   └── module*.md               # Step-by-step modules
└── install-prerequisites.sh     # Tool installation script
```

### Microservices
- **Product Service** - Product catalog management (DynamoDB)
- **Cart Service** - Shopping cart operations (DynamoDB)  
- **User Service** - User profile management (RDS PostgreSQL)
- **Order Service** - Order processing and orchestration (RDS PostgreSQL)
- **Notification Service** - Asynchronous email notifications (SNS/SQS/SES)

### AWS Deployment

We will deploy this eCommerce application to AWS by going module-by-module as follows:
- Module 0: Prerequisites
- Module 1: Networking (VPC, Subnets, Security Groups)
- Module 2: Authentication (Cognito)
- Module 3: Frontend Infrastructure (S3, CloudFront)
- Module 4: Data Layer (RDS, DynamoDB)
- Module 5: Container Deployment (ECR, ECS/Fargate, ALB)
- Module 6: API Gateway (HTTP API, VPC Link)
- Module 7: Frontend-Backend Integration
- Module 8: Notification (SNS, SQS)
- Module 9: Custom Domain & SSL (Route53, ACM)
- Module 10: Cleanup

**Time required**: 4-5 hours

> **Note**: Remember to clean up AWS resources after learning to avoid ongoing charges.

## Getting Started

1. Proceed to [AWS Deployment](deployment/README.md)
2. Clean up resources after learning

Happy Learning!
