from setuptools import find_packages, setup

with open("README.md", "r") as fh:
    long_description = fh.read()

setup(
    name="mockseries",
    version="0.1.1",
    long_description=long_description,
    long_description_content_type="text/markdown",
    packages=find_packages(),
    url="http://mockseries.catheu.tech/",
    license="BSD",
    author="Cyril de Catheu",
    author_email="cdecatheu@hey.com",
    description="Easy and intuitive generation of synthetic timeseries.",
    install_requires=[
        "numpy==1.19.5",
    ],
    project_urls={
        "Bug Tracker": "https://github.com/cyrilou242/mockseries/issues",
        "Documentation": "http://mockseries.catheu.tech/",
        "Source Code": "https://github.com/cyrilou242/mockseries",
    },
    classifiers=[
        "Intended Audience :: Science/Research",
        "Intended Audience :: Developers",
        "License :: OSI Approved :: BSD License",
        "Programming Language :: Python",
        "Programming Language :: Python :: 3",
        "Programming Language :: Python :: 3.8",
        "Programming Language :: Python :: 3.9",
        "Programming Language :: Python :: 3.10",
        "Programming Language :: Python :: 3 :: Only",
        "Topic :: Software Development",
        "Topic :: Scientific/Engineering",
        "Typing :: Typed",
        "Operating System :: OS Independent",
        "Operating System :: Microsoft :: Windows",
        "Operating System :: POSIX",
        "Operating System :: Unix",
        "Operating System :: MacOS",
    ],
    python_requires=">=3.6",
    entry_points={
        "console_scripts": [
            "mockseries = mockseries.main:main",
        ],
    },
)
