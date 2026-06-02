# Computer Fundamentals & Developer Environment Setup

Computer Fundamentals & Developer Environment Setup is a foundational guide for anyone entering software development, IT, or tech-related fields. Understanding how computers work at a fundamental level prevents you from being a "black-box" programmer who only knows frameworks without grasping the underlying systems. A well-configured developer environment boosts productivity, ensures consistency across projects, and reduces debugging headaches.

This guide is divided into two main parts: computer fundamentals and developer environment setup, with examples, nuances, and practical considerations.

## Part 1: Computer Fundamentals

### 1.1 Hardware Architecture

Computers mostly follow the von Neumann architecture: a CPU fetches instructions from memory, processes data, and interacts with input/output devices.

Key components:
- **CPU (Central Processing Unit)**: Executes instructions. Modern CPUs have multiple cores (e.g., 8-core Ryzen or Apple M-series) and threads. Clock speed (GHz) is important, but IPC (instructions per clock) and architecture (x86-64 vs ARM) matter more today.
- **RAM (Random Access Memory)**: Volatile, fast temporary storage. 16GB is a minimum for development in 2026; 32GB+ is recommended for heavy tasks such as Docker, VMs, or large datasets.
- **Storage**: Prefer SSDs (NVMe) over HDDs for speed. Understand file systems like NTFS, APFS, and ext4.
- **Motherboard, GPU, PSU**: GPU is crucial for machine learning and graphics workloads. Choose integrated vs discrete based on needs.
- **Input/Output**: Includes peripherals and buses like PCIe and USB.

Nuances & edge cases:
- **Thermal throttling**: High-end laptops can slow down under sustained load.
- **ARM vs x86**: Apple Silicon and some Windows devices use ARM, which can affect compatibility and require Rosetta or emulation.

### 1.2 How Computers Process Information

- **Binary System**: Everything is represented as 0s and 1s. Bits → Bytes (8 bits) → KB, MB, GB (powers of 1024 in computing).
- **Data Representation**: Integers use two's complement. Floating-point numbers use IEEE 754, which can produce precision errors like 0.1 + 0.2 ≠ 0.3. Characters are encoded with ASCII or Unicode/UTF-8.
- **Boolean Logic & Gates**: AND, OR, NOT, XOR are the building blocks of computation.
- **Operating Systems**: Manage hardware through the kernel, handling process scheduling, memory management, and file system abstraction.

Examples:
- When you run a program, the OS loads it into RAM and the CPU executes machine code.
- Context switching occurs when the OS rapidly changes which process is running for multitasking.

### 1.3 Software Fundamentals

- **System Software**: Includes the OS, drivers, and compilers.
- **Application Software**: Includes programs such as editors, browsers, and utilities.
- **Programming Paradigms**: Procedural, object-oriented, functional, declarative.
- **Compilation vs Interpretation**: C/C++ are compiled to machine code, while Python is interpreted (often via bytecode in CPython).
- **Abstraction Layers**: High-level languages hide hardware details to improve productivity.

### 1.4 Networking Basics

- **OSI/TCP-IP Model**: Understand layers from physical (cables) to application (HTTP).
- **IP Addressing**: Learn IPv4 vs IPv6, subnets, and NAT.
- **Protocols**: TCP is reliable, UDP is fast. HTTP/HTTPS and DNS are essential for web communication.
- **Common Tools**: `ping`, `traceroute`, `nslookup`, `Wireshark`.

Implications:
- Understanding networking helps debug API calls, CORS issues, and deployment problems.

### 1.5 Security & Best Practices

- **CIA Triad**: Confidentiality, Integrity, Availability.
- **Common threats**: Malware, phishing, SQL injection, XSS.
- **Basic security**: Use strong passwords, enable 2FA, use encryption such as HTTPS/AES, keep software updated, and use firewalls.
- **Developer angle**: Never hardcode secrets. Use environment variables or secret managers.

Edge cases:
- Supply chain attacks (for example, compromised npm packages) and zero-day vulnerabilities.

## Part 2: Developer Environment Setup

A good developer environment should be reproducible, performant, and consistent across machines.

### 2.1 Choosing an Operating System

| OS | Strengths | Weaknesses | Best For |
| --- | --- | --- | --- |
| Linux (Ubuntu/Fedora/Pop!_OS) | Free, highly customizable, native developer tools | Learning curve for beginners | Servers, serious development |
| macOS | Unix-based, polished, excellent hardware integration | Expensive hardware | iOS/macOS development, general development |
| Windows | Strong software compatibility, good gaming support, WSL2 available | Some tools need extra setup | .NET development, general use with WSL |

Recommendation (2026): Use WSL2 on Windows or dual-boot Linux. For maximum consistency, many professionals run Linux natively or in virtual machines.

### 2.2 Core Tools Installation

#### Terminal / Shell
- **Windows**: PowerShell + Windows Terminal + WSL2.
- **macOS/Linux**: Zsh (with Oh My Zsh) or Fish.
- **Windows fallback**: Git Bash.

#### Version Control - Git
- Install from git-scm.com.
- Configure:
  - `git config --global user.name "Your Name"`
  - `git config --global user.email "you@example.com"`
  - `git config --global core.editor "code --wait"`
- Learn branching, rebasing, and GitHub/GitLab workflows.

#### Text Editor / IDE
- **VS Code**: Recommended starter editor with powerful extensions.
- Essential extensions: Python, ESLint, Prettier, Docker, GitLens, Remote - WSL/SSH.
- Alternatives: JetBrains IDEs (IntelliJ, PyCharm), Neovim/Vim, Cursor.

#### Programming Language Environments
- **Python**: Use `pyenv` for version management. Use `poetry` or `uv` for dependency management. Always create virtual environments with `uv venv` or `python -m venv`.
- **Node.js**: Use `nvm` and install the latest LTS.
- **Java**: Use SDKMAN! or manual JDK installation.
- **Go/Rust**: Use the official installers.

#### Package Managers
- OS-level: `apt` (Ubuntu), `brew` (macOS), `winget`/`choco` (Windows).
- Language-specific: `npm`, `yarn`, `pnpm`, `pip`, `poetry`, `cargo`.

#### Containerization & Virtualization
- Use Docker Desktop or Podman for rootless containers.
- Learn Dockerfiles and `docker-compose`.
- Benefit: "It works on my machine" becomes "It works in this container."
- For heavier testing, use VirtualBox or Multipass.

### 2.3 Advanced / Productivity Setup

- Shell customization: aliases, functions, starship prompt.
- Build tools: Make, CMake, npm scripts.
- Databases: PostgreSQL, MongoDB, Redis — run locally via Docker.
- Cloud CLI: AWS CLI, Azure CLI, gcloud.
- API testing: Postman or Insomnia.
- Monitoring: `htop`/`btop`, Process Explorer.
- Dotfiles management: Store `.zshrc`, VS Code settings, and `.gitconfig` in a Git repository for easy replication.

### 2.4 Best Practices & Workflow

- Use `.env` files for environment variables and never commit them to version control.
- Maintain a consistent project structure across repositories.
- Pin versions with lockfiles: `poetry.lock`, `package-lock.json`.
- Use VS Code Remote - SSH/Containers for clean isolation and remote development.
- Back up and sync dotfiles and config with Git.

Troubleshooting common issues:
- Permission errors: use `sudo` carefully or fix ownership.
- Path issues: understand the `$PATH` variable.
- Port conflicts: use `lsof -i :3000` on Linux/macOS or Resource Monitor on Windows.
- Performance issues: monitor with `htop` and close unused Docker containers.

Nuances:
- In regions with unstable power or internet, prioritize laptops with strong battery life and offline tools. Use VS Code locally and consider data costs when downloading SDKs or Docker images.

### 2.5 Security in the Dev Environment

- Use SSH keys instead of passwords.
- Use GPG to sign commits.
- Scan dependencies with `npm audit`, `safety` for Python, and similar tools.
- Use a password manager such as Bitwarden.
