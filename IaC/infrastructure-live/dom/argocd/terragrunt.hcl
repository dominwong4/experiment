terraform {
    source = "../../..//terraform-modules/argocd"
}

inputs = {
    argocd_values_path = "values/argocd.yaml"
    argocd_image_updater_values_path = "values/argocd-image-updater.yaml"
    chart_museum_values_path = "values/chartmuseum.yaml"
    cluster_name = dependency.eks.outputs.cluster_name
    cluster_endpoint = dependency.eks.outputs.cluster_endpoint
    cluster_certificate_authority_data = dependency.eks.outputs.cluster_certificate_authority_data
}

dependency "eks" {
  config_path = "../eks"

  mock_outputs = {
    cluster_name = ""
    cluster_endpoint = ""
    cluster_certificate_authority_data = ""
  }
}

generate "helm_provider" {
  path      = "helm-provider.tf"
  if_exists = "overwrite_terragrunt"
  contents  = <<EOF

provider "helm" {
  kubernetes {
    host                   = var.cluster_endpoint
    cluster_ca_certificate = base64decode(var.cluster_certificate_authority_data)
    exec {
      api_version = "client.authentication.k8s.io/v1beta1"
      args        = ["eks", "get-token", "--cluster-name", var.cluster_name]
      command     = "aws"
    }
  }
}
EOF
}