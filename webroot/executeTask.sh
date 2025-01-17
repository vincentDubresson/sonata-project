#!/bin/bash

# Exécute les tâches une par une

# Tâche 1
composer security_checker

# Tâche 2
composer yamllint

# Tâche 3
composer twiglint

# Tâche 4
composer twigcs

# Tâche 5
composer phpstan

# Tâche 6
composer csfixer:dryrun

# Tâche 7
npm run eslint:jsx

# Tâche 8
npm run eslint:js

# Tâche 9
npm run stylelint