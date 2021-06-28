# Typescript Utility Types 🛠

## `RequiredOnly<Type, Keys>`

Takes existing Type and makes a subset of keys required and remaining optional

```typescript
import type { RequiredOnly } from './index.d.ts'

interface Hero {
  name: string
  powers: string
  villian: boolean
}

type RequiredOnlyHero = RequiredOnly<Hero, "name" | "powers">

const mySuperhero(hero: RequiredOnlyHero) {
  hero.name // required
  hero.powers // required
  hero.villian // optional
}
```
