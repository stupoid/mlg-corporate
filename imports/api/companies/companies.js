import SimpleSchema from 'simpl-schema';
import { Mongo } from 'meteor/mongo';
SimpleSchema.extendOptions(['autoform']);

Companies = new Mongo.Collection('companies');

let CompaniesSchema = new SimpleSchema({
  'name': {
    type: String,
    label: 'The name of the company'
  },
  'maxEntries': {
    type: Number,
    min: 1,
    max: 99,
    label: 'The max number number of tickets that can be claimed every day'
  },
  'validity.start': {
    type: Date,
    label: 'The date the company\'s pass starts'
  },
  'validity.end': {
    type: Date,
    label: 'The date the company\'s pass expires'
  }
});

Companies.attachSchema(CompaniesSchema);
