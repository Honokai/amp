export function resolveRating(rating: number): number[] {
  const ceil = Math.ceil(rating)
  const floor = Math.floor(rating)
  
  return ceil != floor ? Array(ceil).fill(1).fill(0.5, -1) : Array(ceil).fill(1)
}