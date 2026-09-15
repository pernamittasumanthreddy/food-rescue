# FoodRescue — Security & Regulatory Compliance Policy

## 1. Authentication & Session Security
- **Bcrypt / Argon2 Hashing**: Passwords stored with minimum 12 salt rounds.
- **Stateless JWT + Refresh Token Rotation**: Strict token expiry (24 hours access, 7 days refresh) with server-side revocation on logout.
- **Account Lockout Protection**: 5 consecutive failed login attempts result in a 15-minute temporary lockout.
- **Audit Trail**: Every authentication event, privilege escalation, role modification, or donation cancellation is captured in an append-only audit log.

## 2. Food Safety & Regulatory Guardrails
- **FSSAI Compliance**: All food donations must carry mandatory temperature logging, preparation timestamps, and allergy declarations.
- **Temperature Thresholds**: Cooked foods must be maintained at $\ge 65^\circ\text{C}$ (hot hold) or rapidly chilled to $\le 8^\circ\text{C}$ (cold hold).
- **Mandatory Rejection**: Any food showing sensory compromise or temperature deviation is rejected for human consumption.

## 3. Data Protection & Privacy (DPDP Act Compliance)
- **Sensitive Personal Data (SPD)**: Phone numbers and addresses are masked in public views and only revealed to confirmed dispatch drivers during an active mission.
- **Beneficiary Dignity**: Beneficiary photos and biometric data require informed consent and are stored under encrypted object keys.
