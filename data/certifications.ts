import { Certification } from "@/types";

export const certifications: Certification[] = [
  {
    id: "cert-1",
    title: "AWS Certified Solutions Architect – Associate",
    organization: "Amazon Web Services",
    date: "Mar 2026",
    image: "/cert-aws.svg",
    credentialUrl: "https://example.com/cert/aws-saa",
  },
  {
    id: "cert-2",
    title: "Professional Full Stack Engineer",
    organization: "Meta (Coursera)",
    date: "Nov 2025",
    image: "/cert-meta.svg",
    credentialUrl: "https://example.com/cert/meta-fullstack",
  },
  {
    id: "cert-3",
    title: "MongoDB Certified Developer",
    organization: "MongoDB University",
    date: "Jul 2025",
    image: "/cert-mongodb.svg",
    credentialUrl: "https://example.com/cert/mongodb-dev",
  },
  {
    id: "cert-4",
    title: "Docker & Kubernetes: The Practical Guide",
    organization: "Udemy",
    date: "Feb 2025",
    image: "/cert-docker.svg",
    credentialUrl: "https://example.com/cert/docker-k8s",
  },
];
