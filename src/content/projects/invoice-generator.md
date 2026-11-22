---
title: Invoice Generator
description: A Python and Tkinter application that turns manual billing into one-click, professional invoices.
date: 2026-02-10
tags:
  - security
stack:
  - Python
  - Tkinter
  - docxtpl
securityNotes: Local-first by design — the generator runs on the user's machine with no network calls or remote storage, so billing data never leaves the device.
---

## The problem

Creating invoices by hand is repetitive: the same fields, the same subtotal and tax arithmetic, and the same document formatting every time. Small mistakes in a total or a file name are easy to make when the process is manual.

## What I built

A desktop application with a simple form for client and item details. It calculates the subtotal, tax and total automatically, then produces a professional Word (`.docx`) invoice with `docxtpl`. The whole flow — from data entry to a finished invoice — is one click.

## Why it matters

The interface stays deliberately small so that someone can use it without training. Automating the arithmetic and the document layout removes the two most error-prone parts of manual billing.

## Stack

Python, Tkinter and `docxtpl`.

## What I'd improve next

Add a preview before export, reusable client records, and a simple export history for small teams that need to track issued invoices.
