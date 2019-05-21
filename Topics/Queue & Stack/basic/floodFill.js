/**
 * An image is represented by a 2-D array of integers, each integer representing the pixel value of the image (from 0 to 65535).
 * Given a coordinate (sr, sc) representing the starting pixel (row and column) of the flood fill, and a pixel value newColor, "flood fill" the image.
 * To perform a "flood fill", consider the starting pixel, plus any pixels connected 4-directionally to the starting pixel of the same color as the starting pixel, plus any pixels connected 4-directionally to those pixels (also with the same color as the starting pixel), and so on. Replace the color of all of the aforementioned pixels with the newColor.
 * At the end, return the modified image.
 */
/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, newColor, firstColor = image[sr][sc]) {
    if(sr < 0 || sc < 0 || sr >= image.length || sc >= image[sr].length || image[sr][sc] === newColor || firstColor !== image[sr][sc]) {
        return image;
    }
    image[sr][sc] = newColor;
    
    floodFill(image, sr + 1, sc, newColor, firstColor)
    floodFill(image, sr - 1, sc, newColor, firstColor)
    floodFill(image, sr, sc + 1, newColor, firstColor)
    floodFill(image, sr, sc - 1, newColor, firstColor)
    
    return image;
};