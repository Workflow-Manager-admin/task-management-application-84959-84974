#!/bin/bash
cd /home/kavia/workspace/code-generation/task-management-application-84959-84974/react_todo_frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

