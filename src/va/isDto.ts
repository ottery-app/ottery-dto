import {DuckDto} from "ducktyper";

/**
 * this is used to check if the input extends the DuckDto class. Or if it is an instance of the DuckDto class.
 * 
 * @note this is not done with makeDuck because there is a known bug where when a DuckDto is passed into a isDuck, the validator fails to run and false is returned
 * @param input any
 * @returns true if the object is either a class that extends DuckDto or if it is an instance of DuckDto.
 */
export const isDto = (input: any): boolean => {
    if (typeof input === "function") {
      // Check if the input is a class that extends DuckDto
      return input.prototype instanceof DuckDto;
    } else {
      // Check if the input is an instance of DuckDto
      return input instanceof DuckDto;
    }
  };