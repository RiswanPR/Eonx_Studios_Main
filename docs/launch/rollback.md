# Eonx Emergency Rollback Plan

## 1. Trigger Conditions for Rollback
- Critical outage / HTTP 500 across core public routes.
- Severe security breach or data integrity defect.
- Complete breakdown of `/book-a-call` lead ingestion.

## 2. Execution Steps
1. **Hosting Platform Rollback**:
   - Revert instantly to previous stable deployment via hosting dashboard (e.g. Vercel instant rollback).
2. **Git Rollback**:
   - Checkout previous release tag: `git checkout v1.0.0-rc` (or previous stable commit).
3. **Emergency 3D Kill Switch**:
   - If issue is WebGL/GPU crash on specific user devices, set environment variable `NEXT_PUBLIC_ENABLE_3D=false` and redeploy.
4. **Verification**:
   - Confirm homepage response, lead submission, and navigation recovery.
5. **Post-Mortem**:
   - Record root cause and file P0 incident in issue tracker.
