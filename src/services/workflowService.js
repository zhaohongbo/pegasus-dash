import request from './request';

export async function queryWorkflowDefinitionList() {
  return request('/workflow/definition/list', {
    method: 'GET'
  });
}

export async function queryWorkflowDefinition(definitionId) {
  return request('/workflow/definition/' + definitionId, {
    method: 'GET'
  });
}

export async function createWorkflow(definitionId, params) {
  return request('/create/' + definitionId, {
    method: 'POST',
    body: params,
  });
}