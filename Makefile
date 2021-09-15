
#

clean_run: clean build_site build_subsites run

clean:
	rm -rf _site

build_site:
	bundle exec jekyll build

build_subsites: build_subsite_help build_subsite_task_trees

build_subsite_help:
	# cp favicon.ico __help/
	# Specify _subsite_config.yml first so that __help/_config.yml can override its settings
	bundle exec jekyll build --verbose --config "_subsite_config.yml,__help/_config.yml"

build_subsite_task_trees:
	cd __task_trees && ./hugow
	rm -rf _site/task_trees
	mv __task_trees/public _site/task_trees

# Has only been tested on MacOS.
# See https://github.com/zhustec/jekyll-diagrams or .github/workflows/build-gh-pages.yml for linux commands.
install_jekyll_diagram_dependencies:
	brew install graphviz

	# Assumes npm is installed. Install globally so jekyll can call it using the default $PATH.
	npm install -g mermaid.cli nomnoml state-machine-cat wavedrom-cli
	# Skipping packages b/c they are not working: vega vega-cli vega-lite

	# Skipping erd due to erd requiring ActiveRecord
	# Assumes brew is installed
	# cabal --version || brew install cabal-install
	# cabal update && cabal install erd

	# Assumes cargo is installed: https://doc.rust-lang.org/cargo/getting-started/installation.html
	cargo install svgbob_cli

run:
	bundle exec jekyll serve --incremental