guard "coffeescript", :input => "webroot/coffeescripts", :output => "webroot/assets"

guard "compass" do
  watch %r{webroot/sass/.+\.s[ac]ss}
end

# guard "phpunit", :tests_path => "tests", :cli => "--colors", :all_on_start => false, :all_after_pass => true  do
#   watch %r{tests/.+Tests\.php}
#   watch(%r{lib/(.+)\.php}) { |f| "tests/#{f[1]}Test.php" }
# end

guard "livereload" do
  watch %r{webroot/.+\.html}
  watch %r{webroot/assets/.+\.js}
  watch %r{webroot/assets/.+\.css}
end
