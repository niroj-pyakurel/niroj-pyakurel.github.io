---
title: A practical starter kit for security tooling
description: What Nmap, Wireshark, Burp Suite and Nessus are actually useful for when you are learning web security.
date: 2026-03-18
tags:
  - security
  - web
---

## Start with a question, not a tool

Security tooling is most useful when you know what you are trying to answer. Are you looking for open ports, misconfigured services, unexpected traffic, or application-level issues? Each tool answers a different question.

## The four tools I reach for

**Nmap** answers "what is reachable?" It discovers hosts and services so you know what is actually exposed before you look any deeper.

**Wireshark** answers "what is moving?" It shows the traffic itself, which helps when something behaves strangely on the network.

**Burp Suite** answers "how does the application behave?" It lets you inspect and repeat web requests, which makes input handling and session behaviour visible.

**Nessus** answers "what looks known-bad?" It scans for known vulnerabilities and gives you a prioritized list to work through.

## Keep the notes honest

A scan result is a starting point, not a finding you can publish. Verify what a tool reports, record what you checked, and describe limitations plainly. Clear notes are more useful than a long list of alarming labels.

## Where this leads

My certifications — Cybersecurity for Businesses (EC-Council) and Ethical Hacking (Cisco NetAcad) — gave me the vocabulary and method; regular practice with these tools is what makes the vocabulary useful. I use the same habit on web work: a basic security pass before launch, with findings written in plain language.
