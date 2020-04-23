This folder contains the specific metadata used by the REPL

You can generate them by running `.\fake.cmd build -t Generate.Metadata` from the root of Fable REPL repository.

You will need to have the fsharp fork made by @ncave just outside of repl repo.

*Notes: It was not working when using it as a submodule...*

Command to run from Fable REPL root:

1. `cd ..`
1. `git clone git@github.com:ncave/fsharp.git fsharp_fable`
1. `cd fsharp_fable`
1. `git checkout export`
1. `cd ..`
1. `cd repl`
1. `.\fake.cmd build -t Generate.Metadata`