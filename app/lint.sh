eslintArgs=""
prettierArgs="--check"

if [ "$FIX" ]; then
  eslintArgs="--fix"
  prettierArgs="--write"
fi

bun eslint . --ext .tsx,.ts,.jsx,.js $eslintArgs
bun prettier **/*.{tsx,ts,jsx,ts,css,html,md,json,yaml} $prettierArgs --no-error-on-unmatched-pattern
