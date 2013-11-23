Duck encoding - representing UTF-8 strings
==========================================

Why?
----
Function names in most programming languages are restricted to a small set of
characters with the _ character (underscore) often being the only permitted
non-alphanumeric character. Test suites sometimes use function names for
reporting test results so that tests are effectively self-documenting. But if
we want a test result to report:

    Test $user->password exists and has ≥ 8 characters

... this is not possible. Duck encoding gives us a way to achieve this by naming
the function:

    Test___dsuser__prpassword_exists_and_has___ge_8_characters

This is obviously a lot less readable in the code, but this trade-off may be
worth it for the clearer display of test results.

Is this an anti-pattern?
------------------------
Many people prefer natural language in test suites and so use something like this:

    Test_User_has_password_property_with_at_least_8_characters

... and in this example I agree - Duck should be used sparingly.

Using Duck
----------
If you are viewing results in a web browser you can use Duck as a jQuery extension:

    $('.test-func').duck('encode');

... or you can incorporate the code in duck.js into your own script. A PHP version
is also available for incorporating into custom reporters for PHPUnit or SimpleTest.

Important information
---------------------
[![Creative Commons License](http://i.creativecommons.org/l/by-sa/3.0/80x15.png)](http://creativecommons.org/licenses/by-sa/3.0/deed.en_GB)
Duck encoding is copyright © 2013 MrAnchovy and is licensed under a
[Creative Commons Attribution-ShareAlike 3.0 Unported License](http://creativecommons.org/licenses/by-sa/3.0/deed.en_GB).
Code implementing Duck encoding is copyright © 2013 MrAnchovy and is licensed under a
[MIT license](http://opensource.org/licenses/MIT).

See [LICENSE.markdown] for more information.
