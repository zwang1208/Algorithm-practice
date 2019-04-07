const numUniqueEmails = (emails) => {
    return new Set(
        emails.map(email => {
            let arr = email.split('@')
            return `${arr[0].replace(/\+.*$|\./g, '')}@${arr[1]}`
        })
    ).size
}

// /\+.*$|\./g
// + is a specail char, so adds \.
// .* means any character after +.
// $, in regex, it represents the end of string.
// | equals to or.
// . is also a special char, so adds \.
// In the end of regex, g, global search, means finding all matches in input and replace them.
// In sum, replace the substring that after sign + or the char . with empty string.