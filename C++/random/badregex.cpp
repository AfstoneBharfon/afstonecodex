#include <iostream>
#include <regex>

/*
 * The regular expression provided is a "bad" one
 * The code throws an exception when it's run under macOS (Clang - Regex engine: libc++)
 * However, when we use GCC 12 (Regex engine: libgc++) and run the code on a linux server, it takes about 7 minutes
 */

int main(){
    std::string text = "Everyone loves Lucy.";
    std::regex pattern(R"(.*+s}}@w)");
    // Perform regex search
    std::smatch match;
    bool found = std::regex_search(text, match, pattern);
    std::cout << "Regex search result: " << (found ? "Match found" : "No match") << std::endl;
    return 0;
}
