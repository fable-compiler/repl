[<AutoOpen>]
module Helpers

open Feliz

type Html with 
    static member inline ofOption (element : ReactElement option) : ReactElement = 
        match element with
        | Some element -> 
            element
            
        | None -> 
            Html.none

module Tooltip =

    open System.Text.RegularExpressions

    let private stringReplacePatterns =
        [ "&lt;", "<"
          "&gt;", ">"
          "&quot;", "\""
          "&apos;", "'"
          "&amp;", "&"
          "<summary>", "**Description**\n\n"
          "</summary>", "\n"
          "<para>", "\n"
          "</para>", "\n"
          "<remarks>", ""
          "</remarks>", "\n" ]

    let private regexReplacePatterns =
        let r pat = Regex(pat, RegexOptions.IgnoreCase)
        let code (strings : string array) =
            let str = strings.[0]
            if str.Contains("\n") then
                "```forceNoHighlight" + str + "```"
            else
                "`" + str + "`"
        let returns = Array.item 0 >> sprintf "\n**Returns**\n\n%s"
        let param (s: string[]) = sprintf "* `%s`: %s"(s.[0].Substring(1, s.[0].Length - 2)) s.[1]
        [ r"<c>((?:(?!<c>)(?!<\/c>)[\s\S])*)<\/c>", code
          r"""<see\s+cref=(?:'[^']*'|"[^"]*")>((?:(?!<\/see>)[\s\S])*)<\/see>""", code
          r"""<param\s+name=('[^']*'|"[^"]*")>((?:(?!<\/param>)[\s\S])*)<\/param>""", param
          r"""<typeparam\s+name=('[^']*'|"[^"]*")>((?:(?!<\/typeparam>)[\s\S])*)<\/typeparam>""", param
          r"""<exception\s+cref=('[^']*'|"[^"]*")>((?:(?!<\/exception>)[\s\S])*)<\/exception>""", param
          r"""<a\s+href=('[^']*'|"[^"]*")>((?:(?!<\/a>)[\s\S])*)<\/a>""", fun s -> (s.[0].Substring(1, s.[0].Length - 2))

          r"<returns>((?:(?!<\/returns>)[\s\S])*)<\/returns>", returns
        ]

    /// Helpers to create a new section in the markdown comment
    let private suffixXmlKey (tag : string) (value : string) (str : string) =
        match str.IndexOf(tag) with
        | x when x <> -1 ->
            let insertAt =
                if str.Chars(x - 1) = ' ' then
                    x - 1
                else
                    x
            str.Insert(insertAt, value)
        | _ -> str

    let private suffixTypeparam = suffixXmlKey "<typeparam" "\n**Type parameters**\n\n"
    let private suffixException = suffixXmlKey "<exception" "\n**Exceptions**\n\n"
    let private suffixParam = suffixXmlKey "<param" "\n**Parameters**\n\n"

    /// Replaces XML tags with Markdown equivalents.
    /// List of standard tags: https://docs.microsoft.com/en-us/dotnet/fsharp/language-reference/xml-documentation
    let replaceXml (str: string) : string =
        let str =
            str
            |> suffixTypeparam
            |> suffixException
            |> suffixParam

        let res =
            regexReplacePatterns
            |> List.fold (fun res (regex: Regex, formatter: string[] -> string) ->
                // repeat replacing with same pattern to handle nested tags, like `<c>..<c>..</c>..</c>`
                let rec loop res : string =
                    match regex.Match res with
                    | m when m.Success ->
                        m.Groups
                        |> Seq.cast<Group>
                        |> Seq.map (fun g -> g.Value)
                        |> Seq.toArray
                        |> Array.splitAt 1
                        |> function
                        | [| firstGroup |], otherGroups ->
                            loop <| res.Replace(firstGroup, formatter otherGroups)
                        | _ -> res
                    | _ -> res
                loop res
            ) str

        stringReplacePatterns
        |> List.fold (fun (res: string) (oldValue, newValue) ->
            res.Replace(oldValue, newValue)
        ) res
        
[<AutoOpen>]
module TranslationsSupport =
    let enTranslations = 
        {| msg_iframe_loaded = "Iframe loaded";
           win_header_console = "Console";
           msg_initializing = "Initializing";
           msg_repl_name = "Fable REPL";
           msg_desktop_experience = "For best experience we recommend running the REPL on a desktop";
           btn_continue = "Continue";
           msg_gist_description = "Created with Fable REPL";
           msg_compilation_failed = "Failed to compile";
           msg_assemblies_load_failed = "Assemblies couldn't be loaded. Some firewalls prevent download of binary files, please check.";
           msg_gist_token_invalid = "An error occured when creating the gist. Is the token valid?";
           msg_gist_token_missing = "You need to register your GitHub API token before sharing to Gist";
           msg_compilation_successful = "Compiled successfuly";
           msg_shareable_url_ready_text = "Copy it from the address bar";
           msg_shareable_url_ready_title = "Shareable link is ready";
           msg_load_gist_error = "An error occured when loading the gist";
           msg_update_url_failed = "An error occured when updating the URL";
           msg_fatal_error = "Should not happen";
           msg_live_sample_text = "Live sample";
           msg_code_text = "Code";
           msg_problems = "Problems";
           msg_problems_info = "Problems = ";
           msg_invalid_iframe_error = "`%A` is not a known value for an iframe message";
           msg_collapse_sidebar = "Collapse sidebar";
           msg_widget_general = "General";
           msg_widget_samples = "Samples";
           msg_widget_options = "Options";
           msg_widget_statistics = "Statistics";
           msg_widget_about = "About";
           msg_found_a_bug = "Found a bug ?";
           msg_general_compile_run_tooltip = "Compile and run (Alt+Enter)";
           msg_general_compile_run_text = "Compile and run";
           msg_general_refresh_sample_tooltip = "Refresh the live sample (without compiling)";
           msg_general_refresh_sample_text = "Refresh the live sample";
           msg_general_reset_repl_tooltip = "Reset the REPL, you will lose your current work";
           msg_general_reset_repl_text = "Click here to reset";
           msg_general_share_url_tooltip = "Share using the URL";
           msg_general_share_url_text = "Share using the URL";
           msg_general_share_gist_tooltip = "Share to Gist";
           msg_general_share_gist_text = "Share to Gist";
           msg_reset_confirmation_text = "Please, confirm to reset";
           btn_confirm = "Confirm";
           btn_cancel = "Cancel";
           btn_save = "Save";
           msg_options_editor_font_size = "Editors font size";
           msg_options_editor_font_family = "Editors font family";
           msg_options_size_small = "Small";
           msg_options_size_medium = "Medium";
           msg_options_size_large = "Large";
           msg_options_programming_language = "Language";
           msg_options_settings_optimize = "Optimize (experimental)";
           msg_options_settings_debug = "Define DEBUG";
           msg_options_settings_typed_arrays = "Typed Arrays";
           msg_options_gist_token_delete = "Delete gist token";
           msg_options_gist_token_githubtoken = "Github token";
           msg_options_gist_token_githubtoken_create = "  (Create)";
           msg_options_gist_token_gist_scope = "Token with gist scope";
           msg_samples_refresh_samples = "Refresh samples";
           msg_stats_steps = "Steps";
           msg_stats_milliseconds_short = "ms";
        |}
    let ukTranslations = 
        {| msg_iframe_loaded = "Iframe завантажено";
           win_header_console = "Консоль";
           msg_initializing = "Ініціалізуємо";
           msg_repl_name = "Fable REPL";
           msg_desktop_experience = "Для найкращого досвіду ми рекомендуємо запускати REPL із десктопа";
           btn_continue = "Продовжити";
           msg_gist_description = "Створено із REPL";
           msg_compilation_failed = "Не вдалося скомпілювати";
           msg_assemblies_load_failed = "Не вдалося завантажити збірки. Деякі брандмауери запобігають завантаженню бінарних файлів, перевірте.";
           msg_gist_token_invalid = "Під час створення gist-у сталася помилка. Чи токен дійсний?";
           msg_gist_token_missing = "Вам потрібно зареєструвати свій токен API GitHub перед тим, як надати спільний доступ до Gist";
           msg_compilation_successful = "Скомпільовано успішно";
           msg_shareable_url_ready_text = "Скопіюйте його з адресного рядка";
           msg_shareable_url_ready_title = "Посилання для спільного доступу готове";
           msg_load_gist_error = "Під час завантаження gist-у сталася помилка";
           msg_update_url_failed = "Під час оновлення URL-адреси сталася помилка";
           msg_fatal_error = "Не повинно траплятися";
           msg_live_sample_text = "Інтерактивний приклад";
           msg_code_text = "Код";
           msg_problems = "Проблеми";
           msg_problems_info = "Проблеми = ";
           msg_invalid_iframe_error = "Невідоме значення `%A` для повідомлення від iframe";
           msg_collapse_sidebar = "Згорнути бічну панель";
           msg_widget_general = "Загальний";
           msg_widget_samples = "Приклади";
           msg_widget_options = "Опції";
           msg_widget_statistics = "Статистика";
           msg_widget_about = "О REPL";
           msg_found_a_bug = "Знайшов помилку ?";
           msg_general_compile_run_tooltip = "Скомпілювати та запустити (Alt+Enter)";
           msg_general_compile_run_text = "Скомпілювати та запустити";
           msg_general_refresh_sample_tooltip = "Оновити інтерактивний приклад (без компіляції)";
           msg_general_refresh_sample_text = "Оновити інтерактивний приклад";
           msg_general_reset_repl_tooltip = "Скинувши REPL, ви втратите поточну роботу";
           msg_general_reset_repl_text = "Скинувши REPL, ви втратите поточну роботу";
           msg_general_share_url_tooltip = "Поділіться за допомогою URL-адреси";
           msg_general_share_url_text = "Поділіться за допомогою URL-адреси";
           msg_general_share_gist_tooltip = "Поділитися через Gist";
           msg_general_share_gist_text = "Поділитися через Gist";
           msg_reset_confirmation_text = "Підтвердьте, щоб скинути";
           btn_confirm = "Підтвердити";
           btn_cancel = "Скасувати";
           btn_save = "Зберегти";
           msg_options_editor_font_size = "Розмір шрифта редактора";
           msg_options_editor_font_family = "Сімейство шрифта редактора";
           msg_options_size_small = "Малий";
           msg_options_size_medium = "Середній";
           msg_options_size_large = "Великий";
           msg_options_programming_language = "Мова";
           msg_options_settings_optimize = "Оптимизувати (експеріментально)";
           msg_options_settings_debug = "Визначити DEBUG";
           msg_options_settings_typed_arrays = "Типізовані масиви";
           msg_options_gist_token_delete = "Видалити токен gist";
           msg_options_gist_token_githubtoken = "Github токен";
           msg_options_gist_token_githubtoken_create = "  (Створити)";
           msg_options_gist_token_gist_scope = "Токен із gist скоупом";
           msg_samples_refresh_samples = "Оновити приклади";
           msg_stats_steps = "Кроки";
           msg_stats_milliseconds_short = "мс";
        |}
    let ruTranslations = 
        {| msg_iframe_loaded = "Iframe загружен";
           win_header_console = "Консоль";
           msg_initializing = "Инициализируем";
           msg_repl_name = "Fable REPL";
           msg_desktop_experience = "Для наилучшего опыта мы рекомендуем запускать REPL с десктопа";
           btn_continue = "Продолжить";
           msg_gist_description = "Создано из REPL";
           msg_compilation_failed = "Не удалось скомпилировать";
           msg_assemblies_load_failed = "Не удалось скачать зборки. Некоторые брэндмауэры предотвращают загрузку бинарных файлов, проверьте.";
           msg_gist_token_invalid = "Во время создания gist-а произошла ошибка. Токен действителен?";
           msg_gist_token_missing = "Вам необходимо зарегистрировать свой токен API GitHub перед тим, как дать совместный доступ к Gist";
           msg_compilation_successful = "Скомпилировано успешно";
           msg_shareable_url_ready_text = "Скопируйте ее и адресной строки";
           msg_shareable_url_ready_title = "Ссылка для совместного доступа готова";
           msg_load_gist_error = "Во время загрузки gist-а произошла ошибка";
           msg_update_url_failed = "Во время обновления URL-адреса произошла ошибка";
           msg_fatal_error = "Не должно случаться";
           msg_live_sample_text = "Интерактивний пример";
           msg_code_text = "Код";
           msg_problems = "Проблемы";
           msg_problems_info = "Проблемы = ";
           msg_invalid_iframe_error = "Неизвестное значення `%A` для сообщения от iframe";
           msg_collapse_sidebar = "Свернуть боковую панель";
           msg_widget_general = "Общее";
           msg_widget_samples = "Примеры";
           msg_widget_options = "Опции";
           msg_widget_statistics = "Статистика";
           msg_widget_about = "О REPL";
           msg_found_a_bug = "Нашел ошибку?";
           msg_general_compile_run_tooltip = "Скомпилировать и запустить (Alt+Enter)";
           msg_general_compile_run_text = "Скомпилировать и запустить";
           msg_general_refresh_sample_tooltip = "Оновить интерактивний пример (без компиляции)";
           msg_general_refresh_sample_text = "Оновить интерактивний пример";
           msg_general_reset_repl_tooltip = "Сбрасывая REPL, ви потеряете текущую работу";
           msg_general_reset_repl_text = "Сбрасывая REPL, ви потеряете текущую работу";
           msg_general_share_url_tooltip = "Поделится с помощью URL-адреса";
           msg_general_share_url_text = "Поделится с помощью URL-адреса";
           msg_general_share_gist_tooltip = "Поделится через Gist";
           msg_general_share_gist_text = "Поделится через Gist";
           msg_reset_confirmation_text = "Подтвердите, чтобы сбросить";
           btn_confirm = "Подтвердить";
           btn_cancel = "Отменить";
           btn_save = "Сохранить";
           msg_options_editor_font_size = "Размер шрифта редактора";
           msg_options_editor_font_family = "Семейство шрифта редактора";
           msg_options_size_small = "Маленький";
           msg_options_size_medium = "Средний";
           msg_options_size_large = "Большой";
           msg_options_programming_language = "Язык";
           msg_options_settings_optimize = "Оптимизировать (экспериментально)";
           msg_options_settings_debug = "Определить DEBUG";
           msg_options_settings_typed_arrays = "Типизированные массивы";
           msg_options_gist_token_delete = "Удалить токен gist";
           msg_options_gist_token_githubtoken = "Github токен";
           msg_options_gist_token_githubtoken_create = "  (Создать)";
           msg_options_gist_token_gist_scope = "Токен с gist скоупом";
           msg_samples_refresh_samples = "Обновить примеры";
           msg_stats_steps = "Шаги";
           msg_stats_milliseconds_short = "мс";
        |}

    let translations = dict["en", enTranslations;"uk", ukTranslations; "ru", ruTranslations ]
    let [<Literal>]defaultLanguage  = "en"
    let selectedLanguage = Browser.Navigator.navigator.language |> Option.defaultValue defaultLanguage
    let languageCode = selectedLanguage.Substring(0, 2)
    let Translations = if translations.ContainsKey languageCode then translations[languageCode] else translations[defaultLanguage]
