import {
  MovieContainer,
  mapStateToProps,
  mapDispatchToProps
} from "./MovieContainer.jsx";
import { setMovies } from "../../actions";
import {shallow} from 'enzyme';

describe("MovieContainer", () => {

  let wrapper;
    beforeEach(() => {
      wrapper = shallow(<MovieContainer/>)
    })

    it('should match snapshot', () => {
      expect(wrapper).toMatchSnapshot()
    })

  describe("mapStateToProps", () => {
    it("should return an object with a movie array", () => {
      const mockState = {
        movies: "Batman",
        type: "SET_MOVIES"
      };
      const expected = { movies: { movies: "Batman", type: "SET_MOVIES" } };
      const mappedProps = mapStateToProps(mockState);
      expect(mappedProps).toEqual(expected);
    });
  });

  describe("mapDispatchToProps", () => {
    it("calls dispatch with a setMovies action", () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = setMovies("Batman");
      const mappedDispatch = mapDispatchToProps(mockDispatch);
      mappedDispatch.setMovies("Batman");
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });
  });


});
