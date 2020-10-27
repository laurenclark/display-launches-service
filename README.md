# Display SpaceX Launches 

This uses the following:

- 💡React Hooks (Functional > OOP)
- 💡Context API (In place of Redux*)
- 💡ES2015+ (No need for Lodash, Ramda etc for something this small)
- 💄 Prettier (For formatting)
- 💬 Typescript
- 🤡 Jest 
- 🐙 Kent C Dodds react-testing-library 
- Netlify
- [SpaceX Api](https://github.com/r-spacex/SpaceX-API/blob/master/docs/v4/README.md)

* - for small things like this Redux is a bit overkill, Redux uses the Context API under the hood + flux pattern. I would perhaps use Redux/Flux pattern for more complex API interactions i.e when actions make sense.
