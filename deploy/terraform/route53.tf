data "aws_route53_zone" "primary" {
  name = var.hostzone
}

resource "aws_route53_record" "domain" {
  name    = var.domain
  zone_id = data.aws_route53_zone.primary.id
  type    = "A"
  alias {
    name                   = aws_s3_bucket.static_site_bucket.website_domain
    zone_id                = aws_s3_bucket.static_site_bucket.hosted_zone_id
    evaluate_target_health = false
  }
}
