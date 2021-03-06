import React, { Component } from 'react';

// Utility for constructing unique IDs...
import cuid from 'cuid';

// For building immutable component states...
import { fromJS,toJS } from 'immutable';
// Sub-components in React
import MonolithHeader from './monolith-header'
import ArticleList from './monolith-article'
export default class MyFeature extends Component {
  // The state of this component is consists of
  // three properties: a collection of articles,
  // a title, and a summary. The "fromJS()" call
  // is used to build an "Immutable.js" Map. Also
  // note that this isn't set directly as the component
  // state - it's in a "data" property of the state -
  // otherwise, state updates won't work as expected.
  state = {
    data: fromJS({
      articles: [
        {
          id: cuid(),
          title: 'Article 1',
          summary: 'Article 1 Summary',
          display: 'none',
        },
        {
          id: cuid(),
          title: 'Article 2',
          summary: 'Article 2 Summary',
          display: 'none',
        },
        {
          id: cuid(),
          title: 'Article 3',
          summary: 'Article 3 Summary',
          display: 'none',
        },
        {
          id: cuid(),
          title: 'Article 4',
          summary: 'Article 4 Summary',
          display: 'none',
        },
      ],
      title: '',
      summary: '',
    }),
  }
  // All of these events return undefined which is fine since they do their job with processing
  // When the title of a new article changes, update the state
  // of the component with the new title value, by using "set()"
  // to create a new map.
  onChangeTitle = (e) => {
    this.data = this.data.set(
      'title',
      e.target.value,
    );
  }

  // When the summary of a new article changes, update the state
  // of the component with the new summary value, by using "set()"
  // to create a new map.
  onChangeSummary = (e) => {
    this.data = this.data.set(
      'summary',
      e.target.value
    );
  }

  // Creates a new article and empties the title
  // and summary inputs. The "push()" method creates a new
  // list and "update()" is used to update the list by
  // creating a new map.
  onClickAdd = () => {
    this.data = this.data
      .update(
        'articles',
        a => a.push(fromJS({
          id: cuid(),
          title: this.data.get('title'),
          summary: this.data.get('summary'),
          display: 'none',
        }))
      )
      .set('title', '')
      .set('summary', '');
  }

  // Removes an article from the list. Calling "delete()"
  // creates a new list, and this is set in the new component
  // state.
  onClickRemove = (id) => {
    const index = this.data
      .get('articles')
      .findIndex(
        a => a.get('id') === id
      );

    this.data = this.data
      .update(
        'articles',
        a => a.delete(index)
      );
  }

  // Toggles the visibility of the article summary by
  // setting the "display" state of the article. This
  // state is dependent on the current state.
  onClickToggle = (id) => {
    const index = this.data
      .get('articles')
      .findIndex(
        a => a.get('id') === id
      );

    this.data = this.data
      .update(
        'articles',
        articles => articles.update(
          index,
          a => a.set(
            'display',
            a.get('display') ? '' : 'none'
          )
        )
      );
  }

  // Getter for "Immutable.js" state data...
  get data() {
    return this.state.data;
  }

  // Setter for "Immutable.js" state data...
  set data(data) {
    this.setState({ data });
  }

  render() {
    const { articles,
      title,
      summary,
    } = this.data.toJS();

    return (
      <section>
        <MonolithHeader name = "Articles"
              title = {title}
              summary = {summary}
              onChangeTitle = {this.onChangeTitle}
              onChangeSummary = {this.onChangeSummary}
              onClickAdd = {this.onClickAdd}/>
        <ArticleList articles={articles}
                     onClickToggle={this.onClickToggle}
                     onClickRemove={this.onClickRemove}/>
      </section>
    );
  }
}
