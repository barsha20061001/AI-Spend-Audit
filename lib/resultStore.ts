import type { AuditResult } from "./audit";

interface StoredAudit {
  id: string;
  createdAt: string;
  results: AuditResult[];
}

export const saveAuditResult = (
  id: string,
  results: AuditResult[]
) => {
  const existing = JSON.parse(
    localStorage.getItem("saved-audits") || "[]"
  );

  const updated: StoredAudit[] = [
    ...existing,
    {
      id,
      createdAt: new Date().toISOString(),
      results,
    },
  ];

  localStorage.setItem(
    "saved-audits",
    JSON.stringify(updated)
  );
};

export const getAuditResult = (id: string) => {
  const audits: StoredAudit[] = JSON.parse(
    localStorage.getItem("saved-audits") || "[]"
  );

  return audits.find((audit) => audit.id === id);
};