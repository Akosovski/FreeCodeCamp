function palindrome(str) {
    const data = str.toLowerCase().match(/[a-z0-9]/g);
    return data.join('') === data.reverse().join('');
}
  
palindrome("eye");