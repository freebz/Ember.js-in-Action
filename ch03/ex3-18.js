// Listing 3.18  Retrieving registered objects from the container

Blog.__container__.lookup('store:main').find('blogPost')
Blog.__container__.lookup('controller:blog')
  .get('model.length')
Blog.__container__.lookup('controller:blogPost')
  .get('postTitle')
Blog.__container__.lookup('controller:blogPost')
  .set('model.markdown', Test')
