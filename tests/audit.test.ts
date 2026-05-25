import { describe, expect, it } from "vitest";
import { runAudit } from "../lib/audit";

describe("Audit Engine", () => {
  it("detects ChatGPT Team overspend", () => {
    const result = runAudit([
      {
        tool: "ChatGPT",
        plan: "team",
        spend: 300,
        seats: 2,
      },
    ]);

    expect(result[0].monthlySavings).toBeGreaterThan(0);
  });

  it("detects Cursor Business downgrade", () => {
    const result = runAudit([
      {
        tool: "Cursor",
        plan: "business",
        spend: 80,
        seats: 2,
      },
    ]);

    expect(result[0].recommendation).toContain("Cursor Pro");
  });

  it("returns optimized state for healthy spend", () => {
    const result = runAudit([
      {
        tool: "Cursor",
        plan: "pro",
        spend: 20,
        seats: 1,
      },
    ]);

    expect(result[0].monthlySavings).toBe(0);
  });

  it("calculates annual savings correctly", () => {
    const result = runAudit([
      {
        tool: "ChatGPT",
        plan: "team",
        spend: 300,
        seats: 2,
      },
    ]);

    expect(result[0].annualSavings).toBe(
      result[0].monthlySavings * 12
    );
  });

  it("detects GitHub Copilot Enterprise overspend", () => {
    const result = runAudit([
      {
        tool: "GitHub Copilot",
        plan: "enterprise",
        spend: 100,
        seats: 2,
      },
    ]);

    expect(result[0].recommendation).toContain("Business");
  });
});

