open System.IO
open System.Text.RegularExpressions

let firstToUpper (str: string) =
    str.[0].ToString().ToUpper() + str.[1..]

let removeExt (filename: string) =
    Path.GetFileNameWithoutExtension(filename)

let run2 folder filename =
    let fulmaDocsPath = Path.Combine(__SOURCE_DIRECTORY__, "../../../../Fulma/docs/src/Fulma/", folder, filename)
    let lines = File.ReadAllLines(fulmaDocsPath)
    lines.[0] <- sprintf "module Fulma.%s" (removeExt filename |> firstToUpper)
    let lines = lines |> Array.takeWhile (fun l -> l.StartsWith("let view") |> not)
    let reg = Regex(@"^let (\w+)\s*\(\)\s*=\s*$")
    let views = ([], lines) ||> Array.fold (fun acc line ->
        let m = reg.Match(line)
        if m.Success
        then m.Groups.[1].Value::acc
        else acc)
    let lines2 = [|
        yield "div [] ["
        for x in List.rev views do
            yield sprintf "    Card.card [] [Card.content [] [%s()] ]" x
        yield "] |> mountById \"elmish-app\""
    |]
    File.WriteAllLines(Path.Combine(__SOURCE_DIRECTORY__, filename), Array.append lines lines2)

let run3 folder filename =
    printfn """{ "type": "menu-item", "label": "%s", "fsharpCode": "fulma/%s", "htmlCode": "fulma/fulma.html" },"""
        (removeExt filename |> firstToUpper)
        filename

let run folder filename =
    let path = Path.Combine(__SOURCE_DIRECTORY__, filename)
    let lines = File.ReadAllLines(path)
    let lines0 = [|"// More info about Fulma at https://mangelmaxime.github.io/Fulma/"|]
    File.WriteAllLines(path, Array.append lines0 lines)

run "Elements" "box.fs"
run "Elements" "button.fs"
run "Elements" "content.fs"
run "Elements" "delete.fs"
run "Elements" "icon.fs"
run "Elements" "image.fs"
run "Elements" "progress.fs"
run "Elements" "table.fs"
run "Elements" "tag.fs"
run "Elements" "title.fs"
run "Elements" "notification.fs"
run "Elements" "form.fs"

run "Components" "breadcrumb.fs"
run "Components" "panel.fs"
run "Components" "card.fs"
run "Components" "menu.fs"
run "Components" "message.fs"
run "Components" "navbar.fs"
run "Components" "pagination.fs"
run "Components" "tabs.fs"
run "Components" "modal.fs"
run "Components" "media.fs"
run "Components" "dropdown.fs"

run "Layout" "container.fs"
run "Layout" "level.fs"
run "Layout" "hero.fs"
run "Layout" "footer.fs"
run "Layout" "section.fs"
run "Layout" "tile.fs"
run "Layout" "columns.fs"