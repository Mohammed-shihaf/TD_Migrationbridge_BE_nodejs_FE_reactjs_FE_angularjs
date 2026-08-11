# npm-check-updates -- Angular 18

package.json pins lodash@4.17.15 (CVE-2020-8203 prototype pollution) and
minimist@0.0.8 (CVE-2020-7598 prototype pollution), enough to genuinely
trigger dependency-vulnerability findings.

Run: bash run_npm_check_updates.sh
