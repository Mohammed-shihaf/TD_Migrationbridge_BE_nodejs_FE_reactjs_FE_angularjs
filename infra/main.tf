terraform {
  required_version = ">= 1.7.0"

  required_providers {
    docker = {
      source  = "kreuzwerker/docker"
      version = "~> 3.0"
    }
  }
}

provider "docker" {}

resource "docker_image" "migrationbridge_backend" {
  name = "migrationbridge-backend:node24"
  build {
    context    = "${path.module}/.."
    dockerfile = "infra/Dockerfile"
  }
}

resource "docker_container" "migrationbridge_backend" {
  name  = "migrationbridge-backend"
  image = docker_image.migrationbridge_backend.image_id
  ports {
    internal = 3000
    external = 3000
  }
}
