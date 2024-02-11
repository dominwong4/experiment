module "vpc" {
  source  = "terraform-aws-modules/vpc/aws"
  version = "5.1.1"

  name = "${var.name}-reuseable-terragrunt-vpc-${var.env}"
  cidr = var.vpc_cidr_block

  azs             = var.azs
  private_subnets = var.private_subnets
  # private_subnet_names = "${var.name}-reuseable-terragrunt-vpc-${var.env}-private-subnets"
  public_subnets = var.public_subnets
  # public_subnet_names  = "${var.name}-reuseable-terragrunt-vpc-${var.env}-public-subnets"

  public_subnet_tags = merge(var.public_subnet_tags, {
    "kubernetes.io/role/elb" = 1
  })
  private_subnet_tags = merge(var.private_subnet_tags, {
    "kubernetes.io/role/internal-elb" = 1
    # Tags subnets for Karpenter auto-discovery
    "karpenter.sh/discovery" = "${var.env}-${var.name}-eks-demo"
  })

  enable_nat_gateway     = true
  single_nat_gateway     = true
  one_nat_gateway_per_az = false

  nat_eip_tags = var.nat_eip_tags

  enable_dns_hostnames = true
  enable_dns_support   = true

  tags = {
    Name        = "${var.name}-reuseable-terragrunt-vpc-${var.env}"
    Environment = "${var.env}",
    Terraform   = true
  }
}
