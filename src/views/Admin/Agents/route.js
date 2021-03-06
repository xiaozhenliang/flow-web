import React from 'react'
import { Route, IndexRoute } from 'react-router'
import { RedirectToIndex } from 'components/Route'

import Component from './index'
import ListComponent from './List'
import CreateComponent from './Create'
import i18n from './i18n'

export default function (path, store) {
  return <Route path={path} component={Component}
    icon='icon-agents' text='Agent' navbar>
    <IndexRoute navbar={i18n('list.navbar')} title={i18n('list.title')}
      component={ListComponent} />
    <Route path='create' navbar={i18n('create.navbar')}
      title={i18n('create.title')}
      component={CreateComponent} />
    <RedirectToIndex from='*' />
  </Route>
}
