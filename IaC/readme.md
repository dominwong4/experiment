## Step

work directory: infrastructure-live

```
    terragrunt run-all init
    terragrunt run-all plan
    terragrunt run-all apply
```

connect control plan
./IaC/infrastructure-live/commands/update-kube-config-aws.sh cluster-name

./IaC/infrastructure-live/commands/install-argocd-rollouts.sh 


first deployment -bff

kubectl apply -f /IaC/argocd-application/prod/apps/frd-app-bff.yaml