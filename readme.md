# Folder Structure


├── IaC

Description: Infrastructure as Code

Tech Stack:

Iac Tools: Terraform

Environment Control: Terragrunt

Cloud Platform: AWS

Cloud components: VPC, ELB, EKS

K8s components: Ingress Nginx, ArgoCD, ArgoCD Image Updater, Prometheus, Grafana, Redis


├── frd-app

Frontend

Deployed URL: http://ab450e080734442ac9a279c0d5ee1229-eefdb1123c043a62.elb.ap-southeast-1.amazonaws.com/

Tech Stack:

CI: Git Action

CD: ArgoCD, Helm

Framework: Next JS 14, use client

UI: Tailwind + Shadcn

Testing Framework: Jest + Playwright

State Management: None / react-query

Network request: Axios

Precommit hook: Husky

i18n: next-intl



├── frd-app-bff

BFF: Backend For Frontend

Tech Stack:

CI: Git Action

CD: ArgoCD, Helm

Framework: NestJS

Testing Framework: Unit Testing -> e2e Testing

Pattern: Controller -> Services -> remote repository

Network request: Axios

Precommit hook: Husky

API documentation: Swagger

Monitoring: Prometheus Metrics

CachingL Redis

Deployed URL: http://ab450e080734442ac9a279c0d5ee1229-eefdb1123c043a62.elb.ap-southeast-1.amazonaws.com/api/friends

### Reason behind of building BFF. 
To achieve production grade level software, we shall use BFF to seperate some backend work to specific backend (which is overkilling in this demo), we can add caching level to maxizmize the perforamance, minimun the expense of using as pay as you go API calling, and sometime we need specific authorization & data aggreating.