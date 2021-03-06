import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Mongo } from 'meteor/mongo';
import { Tracker } from 'meteor/tracker';
import { $ } from 'meteor/jquery';

import { Documents } from '/imports/api/documents/both/document-collection.js';

import './documents-index.html';
import './documents-index-item/documents-index-item.js';

Template.documentsIndex.onCreated(function () {
  this.subscribe('documents.all');
});

Template.documentsIndex.onRendered(function () {
});

Template.documentsIndex.onDestroyed(function () {
});

Template.documentsIndex.helpers({
  documents() {
    return Documents.find({}, { sort: { createdAt: -1 } });
  }
});

Template.documentsIndex.events({
});
