import { Mongo } from 'meteor/mongo';

class ShowGembaOnDemmandCollection extends Mongo.Collection {

}

export const ShowGembaOnDemmand = new ShowGembaOnDemmandCollection('showGembaOnDemmand');
ShowGembaOnDemmand.attachBehaviour('timestampable');
