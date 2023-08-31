variable "bucket_name" {
  description = "s3 bucket name"
  default     = "hackton-project-dropbeat"
  type        = string
}

variable "hostzone" {
  description = "route53 hostzone"
  default     = "choilab.xyz"
  type        = string
}

variable "domain" {
  description = "domain"
  default     = "hackton.choilab.xyz"
  type        = string
}
