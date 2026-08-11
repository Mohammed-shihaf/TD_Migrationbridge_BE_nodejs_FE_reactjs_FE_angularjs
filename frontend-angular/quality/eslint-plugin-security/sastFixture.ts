import { exec } from 'child_process';

export function runDiagnostics(hostname: string): void {
  exec(`ping -c 1 ${hostname}`); // detect-child-process
}

export function evaluateExpression(expr: string): unknown {
  return eval(expr); // detect-eval-with-expression
}
