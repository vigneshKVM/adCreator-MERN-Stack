const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  resetToken: String,
  resetTokenExpiration: Date,
  uploads: [
    {
      imageId: {
        type: String,
        required: true
      }
    }
  ],
  templates: {
    completed: [
        {
          templateId: {
            type: Schema.Types.ObjectId,
            ref: 'PostTemplate',
            required: true
          }
        }
    ],
    draft: [
        {
          templateId: {
            type: Schema.Types.ObjectId,
            ref: 'PostTemplate',
            required: true
          }
        }
    ]
  }

});

userSchema.methods.addToTemplates = function(template) {
  const cartTemplateIndex = this.cart.items.findIndex(cp => {
    return cp.templateId.toString() === template._id.toString();
  });
  let newQuantity = 1;
  const updatedCartItems = [...this.cart.items];

  if (cartTemplateIndex >= 0) {
    newQuantity = this.cart.items[cartTemplateIndex].quantity + 1;
    updatedCartItems[cartTemplateIndex].quantity = newQuantity;
  } else {
    updatedCartItems.push({
      templateId: template._id,
      quantity: newQuantity
    });
  }
  const updatedCart = {
    items: updatedCartItems
  };
  this.cart = updatedCart;
  return this.save();
};

userSchema.methods.removeFromCart = function(templateId) {
  const updatedCartItems = this.cart.items.filter(item => {
    return item.templateId.toString() !== templateId.toString();
  });
  this.cart.items = updatedCartItems;
  return this.save();
};

userSchema.methods.clearCart = function() {
  this.cart = { items: [] };
  return this.save();
};

module.exports = mongoose.model('User', userSchema);
