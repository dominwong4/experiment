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




# Brief Architecture Diagram

![other drawio](https://github.com/dominwong4/experiment/assets/13159792/358b79de-8db4-4b7f-a2d0-a1cfd92faa14)


# Grafana connection Successful screenshot
<img width="1340" alt="image" src="https://github.com/dominwong4/experiment/assets/13159792/6e013dfb-0216-4b31-8804-5c9a6a7682ba">

# Argocd Screenshot
<img width="1337" alt="image" src="https://github.com/dominwong4/experiment/assets/13159792/d15a4d84-ccab-4199-aeda-3bd1b6bcafb5">
<img width="1591" alt="image" src="https://github.com/dominwong4/experiment/assets/13159792/2513e1c3-f539-4a26-a6fe-23903aa0bd07">
