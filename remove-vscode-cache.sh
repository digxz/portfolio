#!/bin/bash
# Execute este script UMA VEZ para remover .vscode do histórico do Git
# Depois pode deletar este arquivo.
git rm -r --cached .vscode/
git add .
git commit -m "chore: remove .vscode from git tracking"
echo "Pronto! .vscode removido do Git. A pasta local não foi apagada."
